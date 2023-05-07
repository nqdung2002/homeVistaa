import { React, useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useParams } from "react-router-dom";

export const PlayPage = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/house/${slug}/playpage`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, [slug]);

    const { unityProvider } = useUnityContext({
    //   loaderUrl: `/3DModels/${data.slug}/Build/House1.0.loader.js`,
    //   dataUrl: `/3DModels/${data.slug}/Build/House1.0.data.unityweb`,
    //   frameworkUrl: `/3DModels/${data.slug}/Build/House1.0.framework.js.unityweb`,
    //   codeUrl: `/3DModels/${data.slug}/Build/House1.0.wasm.unityweb`,

      loaderUrl: "/3DModels/rivana/Build/House1.0.loader.js",
      dataUrl: "/3DModels/rivana/Build/House1.0.data.unityweb",
      frameworkUrl: "/3DModels/rivana/Build/House1.0.framework.js.unityweb",
      codeUrl: "/3DModels/rivana/Build/House1.0.wasm.unityweb",
    });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ height: "750px", width: "1500px" }}
    />
  );
};
