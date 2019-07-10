import styled from 'styled-components'

const Wrapper = styled.div`
width: ${p => 100 * p.lgWidth / p.gridProps.lgWidth}%;
display: ${p => p.lgWidth === 0 ? 'none' : 'block'};
padding: 0 ${p => p.gridProps.lgGutterSize / 2}rem;
@media screen and (max-width: 63rem) {
  width: ${p => 100 * p.mdWidth / p.gridProps.mdWidth}%;
  display: ${p => p.mdWidth === 0 ? 'none' : 'block'};
  padding: 0 ${p => p.gridProps.mdGutterSize / 2}rem;
}
@media screen and (max-width: 40rem) {
  width: ${p => 100 * p.smWidth / p.gridProps.smWidth}%;
  display: ${p => p.smWidth === 0 ? 'none' : 'block'};
  padding: 0 ${p => p.gridProps.smGutterSize / 2}rem;
}`

export default Wrapper
