import React from 'react';
import { ChakraProvider, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { pdfjs } from 'react-pdf';
const pdfUrl = "TIG_WP_2.2.pdf";

function TabsExample() {
    return (
        <ChakraProvider>
            <Box width="100%">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={pdfUrl} />
                </Worker>
            </Box>
        </ChakraProvider>
    );
}

export default TabsExample;
