new PerformanceObserver((list) => {
    const lcpEntry = list.getEntries().at(-1);
    if(!lcpEntry.url) return;

    const navEntry = performance.getEntriesByType('navigation')[0];
    const resEntries = performance.getEntriesByType('resource');
    const lcpResEntry = resEntries.filter((e) => e.name === lcpEntry.url)[0];

    const docTTFB = navEntry.responseStart;

    const lcpRequestStart = Math.max(docTTFB,
        lcpResEntry ? lcpResEntry.requestStart : 0);

    const lcpResponseEnd = Math.max(lcpRequestStart,
        lcpResEntry ? lcpResEntry.responseEnd : 0);

    const lcpRenderTime = Math.max(lcpResponseEnd,
        lcpResEntry ? lcpResEntry.startTime : 0);

    console.log('LCP: ', lcpRenderTime, lcpEntry.element);
    console.log('document_ttfb', docTTFB);
    console.log('resource_load_delay', lcpRequestStart - docTTFB);
    console.log('resource_load_time', lcpResponseEnd - lcpRequestStart);
    console.log('element_render_delay', lcpRenderTime - lcpResponseEnd);

    performance.measure('document_ttfb',
        {start: 0, end: docTTFB});
    performance.measure('resource_load_delay',
        {start: docTTFB - 0.01, end: lcpRequestStart - 0.01});
    performance.measure('resource_load_time',
        {start: lcpRequestStart, end: lcpResponseEnd});
    performance.measure('element_render_delay',
        {start: lcpResponseEnd - 0.01, end: lcpRenderTime - 0.01});

}).observe({type: 'largest-contentful-paint', buffered: true});

new PerformanceObserver((list) => {
    for (const {value, startTime, sources} of list.getEntries()) {
        // Log the shift amount and other entry info.
        console.log('Layout shift:', {value, startTime});
        if (sources) {
            for (const {node, curRect, prevRect} of sources) {
                // Log the elements that shifted.
                console.log('  Shift source:', node, {curRect, prevRect});
            }
        }
    }
}).observe({type: 'layout-shift', buffered: true});

new PerformanceObserver((list) => {
    const fidEntry = list.getEntries()[0];
    const navEntry = performance.getEntriesByType('navigation')[0];
    const wasFIDBeforeDCL =
        fidEntry.startTime < navEntry.domContentLoadedEventStart;

    console.log('FID occurred before DOMContentLoaded:', wasFIDBeforeDCL);
}).observe({type: 'first-input', buffered: true});

new PerformanceObserver((list) => {
    const fidEntry = list.getEntries()[0];

    console.log('FID target element:', fidEntry.target);
    console.log('FID interaction type:', fidEntry.name);
}).observe({type: 'first-input', buffered: true});