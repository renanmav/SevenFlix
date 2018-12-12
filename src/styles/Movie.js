import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10px;
  border-radius: 3px;
  margin: 10px 10px 0 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const Info = styled.Text`
  font-size: 18px;
  margin-top: 5px;
`;

export const Poster = styled.Image``;

export const Content = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DetailButton = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const DetailButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #009aad;
  border-color: #009aad;
  border-width: 2px;
  border-radius: 5px;
  padding: 5px 20px;
`;
