import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  font-size: var(--icon-fs);
  color: ${(props) => props.color};
`;
