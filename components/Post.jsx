import styled from 'styled-components/native';

const PostView = styled.View`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px
`
const PostImage = styled.ImageBackground`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
`
const PostDetails = styled.View`
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 20px;
    background: rgba(0,0,0,0.50);
`
const PostTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 4px;
    color: #fff;
    font-weight: bold;
`
const PostDate = styled.Text`
    font-size: 12px;
    color: #fff;
`

export const Post = ({ imageUrl, title, createdAt }) => {
    return (
        <PostView>
            <PostImage source={{ uri: imageUrl }} resizeMode="cover"/>
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>Дата публикации: {createdAt}</PostDate>
            </PostDetails>
        </PostView>
    )
}