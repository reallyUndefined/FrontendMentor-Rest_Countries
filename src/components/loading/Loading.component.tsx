import loadingImg from "../../images/95728-loading-19.gif";
import { SLoading } from "./Loading.styles";

function Loading() {
  return (
    <SLoading>
      <img src={loadingImg} alt="" />
    </SLoading>
  );
}

export default Loading;
