import { connect } from 'react-redux'
import styled from 'styled-components'
import Room1 from './room1'
import Room from './room'
import { sampleAction } from '../actions/index'
import { check } from '../actions/check'

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ReduxTest = styled.button`

`

const Home = ({ dispatch, theState }) => {
  console.log(theState);

  return (
    <PageContainer>
      <Room1 />
      <Room room={'Room 2'} name={'box2'} handleClick={() => dispatch(check("box2"))}/>
      <Room room={'Room 3'} name={'box3'} handleClick={() => dispatch(check("box3"))}/>
      <Room room={'Room 4'} name={'box4'} handleClick={() => dispatch(check("box4"))}/>
      <ReduxTest onClick={() => dispatch(sampleAction("test"))} >
        Redux Test
      </ReduxTest>
    </PageContainer>
  )
}

const mapStateToProps = (state) => ({
  theState : state
})


export default connect(
  mapStateToProps
)(Home)
