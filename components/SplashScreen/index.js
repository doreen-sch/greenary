import styled from "styled-components";

export default function SplashScreen({ onEnd }) {
  return (
    <StyledVideoContainer>
      <StyledVideo
        autoPlay
        muted
        onEnded={onEnd}
        onError={() => console.log("video error")}
        onLoadedData={() => console.log("video loaded")}
      >
        <source src="images/SplashScreen.mp4" type="video/mp4" />
      </StyledVideo>
    </StyledVideoContainer>
  );
}

const StyledVideoContainer = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
`;

const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
