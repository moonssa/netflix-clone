import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { IGetMovieResult, getMovies } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div``;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  width: 50%;
  font-size: 24px;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });
  console.log(data, isLoading);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {console.log(makeImagePath(data?.results[0].backdrop_path || ""))}
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
