import styled from "styled-components";
import { List } from "../components/list";

const UiTheme = styled.div`
  background: #303030;
`;

function AppUi ({posts}){
  return(
    <UiTheme>
      <List>
        { posts }
      </List>
    </UiTheme>
  )
}

export default AppUi;