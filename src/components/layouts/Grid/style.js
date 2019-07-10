import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0 ${p => p.lgGutterSize / 2}rem;
&.lblb-grid_no-side-gutter {
  width: calc(100% + ${p => p.lgGutterSize}rem);
  margin-left: ${p => p.lgGutterSize / -2}rem;
  padding: 0;
}
@media screen and (max-width: 63rem) {
  padding: 0 ${p => p.mdGutterSize / 2}rem;
  &.lblb-grid_no-side-gutter {
    width: calc(100% + ${p => p.mdGutterSize}rem);
    margin-left: ${p => p.mdGutterSize / -2}rem;
  }
}
@media screen and (max-width: 40rem) {
  padding: 0 ${p => p.smGutterSize / 2}rem;
  &.lblb-grid_no-side-gutter {
    width: calc(100% + ${p => p.smGutterSize}rem);
    margin-left: ${p => p.smGutterSize / -2}rem;
  }
}`

export default Wrapper