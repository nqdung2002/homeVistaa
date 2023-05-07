import { React} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export const House2 = () => {
 
    const { unityProvider } = useUnityContext({
      loaderUrl: "/3DModels/classic/Build/House2.0.loader.js",
      dataUrl: "/3DModels/classic/Build/House2.0.data.unityweb",
      frameworkUrl: "/3DModels/classic/Build/House2.0.framework.js.unityweb",
      codeUrl: "/3DModels/classic/Build/House2.0.wasm.unityweb",
    });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ height: "750px", width: "1500px" }}
    />
  );
};
