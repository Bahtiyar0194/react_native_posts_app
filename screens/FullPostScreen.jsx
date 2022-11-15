import { useEffect, useState } from 'react';
import { View } from "react-native";
import axios from 'axios';
import { Loader } from '../components/Loader';
import styled from 'styled-components/native';

const PostImage = styled.ImageBackground`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
`

const PostDetails = styled.View`
    padding: 20px;
`

const PostTitle = styled.Text`
    font-size: 22px;
    margin-bottom: 4px;
    color: #fff;
    font-weight: bold;
`

const PostDate = styled.Text`
    font-size: 12px;
    color: #fff;
    margin-bottom: 10px;
`
const PostDescription = styled.Text`
    font-size: 20px;
    color: #fff;
`

export const FullPostScreen = ({ route, navigation }) => {
    const [post, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = route.params;

    const fetchPost = () => {
        setLoading(true);
        axios
            .get('https://635385b3ccce2f8c02f84c1a.mockapi.io/api/posts/' + params.post_id)
            .then(({ data }) => {
                setData(data);
            })
            .catch((err) => {
                alert('Ошибка при получении поста')
            }).finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })

            navigation.setOptions({
                title: params.title
            })
    }

    useEffect(fetchPost, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <View style={{ minHeight: '100%', backgroundColor: "#000" }}>
                    <PostImage source={{ uri: post.imageUrl }} resizeMode="cover" />
                    <PostDetails>
                        <PostTitle>{post.title}</PostTitle>
                        <PostDate>Дата публикации: {post.createdAt}</PostDate>
                        <PostDescription>{post.description}</PostDescription>

                    </PostDetails>
                </View>
            )}
        </>
    );
}