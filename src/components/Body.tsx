import React from 'react'
import Section from './Section'
import Assets from './sections/Assets'
import Contact from './sections/Contact'
import Games from './sections/Games'

export default function Body() {
  return (
          <>
                  <div className='space-y-48 my-3 mx-2'>
                          <Section title='Games'>
                                  <Games />
                          </Section>
                          <Section title='Assets'>
                                  <Assets />
                          </Section>
                          <Section title='Contact'>
                                  <Contact/>
                          </Section>
                  </div>
          </>
  )
}