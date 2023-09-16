import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
const MyAccordion = () => {
    const d = "";
  return (
    <>
        <div className='text-center mt-3'>
            <h1>Accordion</h1>
        </div>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What is React and why it is used?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What does MERN stack MEAN?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        <p style={{
            display:`${d}`
        }}>Hello</p>
    </>
  )
}

export default MyAccordion
