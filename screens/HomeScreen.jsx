import { useRef, useEffect, useState } from 'react';
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Post } from '../components/Post';
import { Loader } from '../components/Loader';

export const HomeScreen = ({ navigation }) => {
  const [posts, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true);
    axios
      .get('https://635385b3ccce2f8c02f84c1a.mockapi.io/api/posts')
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        alert('Ошибка при получении постов')
      }).finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
  }

  useEffect(fetchPosts, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={fetchPosts}
              />
            }
            style={{ padding: 15, backgroundColor: "#000" }}
            data={posts} renderItem={({ item }) =>
              <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('FullPost', { post_id: item.id, title: item.title })}>
                <Post imageUrl={item.imageUrl} title={item.title} createdAt={item.createdAt} />
              </TouchableOpacity>
            }
          />
        </>
      )}
    </>
  );
}