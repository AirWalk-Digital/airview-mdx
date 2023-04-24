import React, { useEffect, useRef, useState } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';


const BPMN = ({ xml }) => {
    const containerRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const bpmnViewer = new BpmnJS({
            container: containerRef.current,
            additionalModules: [
                {
                    __init__: ['mouseWheelZoom'],
                    mouseWheelZoom: ['value', null],
                },
                {
                    __init__: ['touchInteraction'],
                    touchInteraction: ['value', null],
                },
            ],
        });





        bpmnViewer.importXML(xml, (err) => {
            if (err) {
                console.error('Failed to import BPMN diagram', err);
            } else {
                console.log('BPMN:bpmnViewer :', bpmnViewer);
                const canvas = bpmnViewer.get('canvas');

                const svg = containerRef.current.querySelector('svg');
                console.log('BPMN:svg :', svg);

                // Use the BpmnJS API to get the viewBox and set the attributes accordingly
                const viewBox = canvas.viewbox();
                console.log('BPMN:viewBox :', viewBox);
                console.log('BPMN:height: ', viewBox.inner.height);
                viewBox.inner.y = 0;
                viewBox.inner.x = 0;


                // Set the updated viewBox using BpmnJS API's canvas.viewbox() method
                canvas.viewbox(viewBox);
                console.log('BPMN:canvas :', canvas);
                // Set the zoom level to fit the viewport
                //   canvas.zoom('fit-viewport', 'auto');
                console.log('BPMN:size: ', canvas.getSize())

                // Set the zoom level to fit the viewport
                // canvas.zoom('fit-viewport', 'auto');
                // Set the container's height
                containerRef.current.style.height = `${viewBox.inner.height + 80}px`;
            }
        });

        return () => bpmnViewer.destroy();
    }, [xml]);



    return (
        <div className="react-bpmn-diagram-container" ref={containerRef}>
            <style>{`
        .react-bpmn-diagram-container {
            overflow: hidden;
          }
          .bjs-powered-by { display: none; }
        `}</style>
        </div>
    );
};

export { BPMN };



