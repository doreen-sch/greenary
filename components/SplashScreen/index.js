import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SplashScreen({ onEnd }) {
  const [videoError, setVideoError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

useEffect(() => {
  if (videoError && !logoError) {
    const timer = setTimeout(onEnd, 1500);
    return () => clearTimeout(timer);
  }
}, [videoError, logoError, onEnd]);

  useEffect(() => {
    if (videoLoaded) return;
    const timeout = setTimeout(() => {
      if (!videoLoaded) setVideoError(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [videoLoaded]);

  if (videoError && logoError) {
    return <p>Loading...</p>;
  }

  if (videoError) {
    return (
      <LogoWrapper>
        <StyledLogo
          src="/images/Greenary_logo.png"
          alt="Greenary logo"
          width={200}
          height={0}
          onError={() => setLogoError(true)}
        />
      </LogoWrapper>
    );
  }

  return (
    <StyledVideoWrapper>
      <StyledVideoContainer>
        <StyledVideo
          autoPlay
          muted
          onEnded={onEnd}
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/images/SplashScreen.mp4" type="video/mp4" />
        </StyledVideo>
      </StyledVideoContainer>
    </StyledVideoWrapper>
  );
}

const StyledLogo = styled(Image)`
  height: auto;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledVideoWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const StyledVideoContainer = styled.div`
  position: relative;
  aspect-ratio: 4.5 / 6;
  max-height: 80vh;
  max-width: 50rem;
`;

const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-position: 46% center;
`;
