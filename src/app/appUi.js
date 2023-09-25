import styled from "styled-components";
import { List } from "../components/list";

const UiTheme = styled.div`
  background: #303030;
`;

function AppUi ({url}){
  return(
    <div className="container mx-auto px-5">
      <List 
        url={url}
      />
    </div>
  )
}

export default AppUi;