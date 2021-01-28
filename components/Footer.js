import Link from 'next/link'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const DivSpace4 = styled.div`
  display: flex:
  margin-bottom: 1rem;
  margin-left: calc(1rem * calc(1 - 0));
  margin-right: calc(1rem * 0);
`

const Span = styled.span`
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Svg = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
`

const DivSpace3 = styled.div`
  margin-right: calc(0.75rem * 0);
  margin-left: calc(0.75rem * calc(1 - 0));
`

const StyledLink = styled.a`
  color: rgba(107, 114, 128, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    color: rgba(75, 85, 99, 1);
  }
`

const AnimationStyledLink = styled(StyledLink)`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

const ExternalLink = ({ href, children }) => (
  <AnimationStyledLink
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </AnimationStyledLink>
)

export default function Footer () {
  return (
    <StyledFooter>
      <DivSpace4>
        <ExternalLink href='https://www.linkedin.com/in/mralexsaavedra'>
          <Span>LinkedIn</Span>
          <Svg viewBox='0 0 24 24'>
            <g
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
              <rect x='2' y='9' width='4' height='12' />
              <circle cx='4' cy='4' r='2' />
            </g>
          </Svg>
        </ExternalLink>
        <ExternalLink href='https://github.com/mralexsaavedra'>
          <Span>Github</Span>
          <Svg viewBox='0 0 24 24'>
            <g
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
            </g>
          </Svg>
        </ExternalLink>
        <ExternalLink href='https://twitter.com/mralexsaavedra'>
          <Span>Twitter</Span>
          <Svg viewBox='0 0 24 24'>
            <g
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
            </g>
          </Svg>
        </ExternalLink>
        <ExternalLink href='mailto:mralexsaavedra@gmail.com'>
          <Span>Email</Span>
          <Svg viewBox='0 0 24 24'>
            <g
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
              <polyline points='22,6 12,13 2,6' />
            </g>
          </Svg>
        </ExternalLink>
      </DivSpace4>
      <DivSpace3>
        <Link href='/uses'>
          <StyledLink>/uses</StyledLink>
        </Link>
      </DivSpace3>
    </StyledFooter>
  )
}
