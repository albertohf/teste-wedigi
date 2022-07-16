import styled from 'styled-components'

const MainListWrapper = styled.article`
  display: flex;
  flex-direction: column;
`

function ListItem() {
  return (
    <MainListWrapper>
      <h1>TODO First List</h1>
      <div>nome</div>
      <div>nomesss</div>
    </MainListWrapper>
  )
}

export default ListItem