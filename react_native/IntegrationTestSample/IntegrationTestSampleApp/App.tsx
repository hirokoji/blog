import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [bookCard, setBookCard] = useState<BookCard>({
    id: 0,
    title: '',
    author: '',
  });

  useEffect(() => {
    // 起動時にREST Serverに格納されたデータをカードに反映する
    const updateCard = async (): Promise<void> => {
      const targetBook = await getDataFromServer();
      if (targetBook) {
        setBookCard({
          id: targetBook.id,
          title: targetBook.title,
          author: targetBook.author,
        });
      }
    };
    updateCard();
  }, []);

  const styles = StyleSheet.create({
    cardPostion: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.cardPostion}>
          <Card
            id={bookCard.id}
            title={bookCard.title}
            author={bookCard.author}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

type BookCard = {
  id: number;
  title: string;
  author: string;
};

const Card: React.FC<BookCard> = ({title, author}) => {
  const styles = StyleSheet.create({
    container: {
      width: '80%',
      height: '10%',
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 20,
    },
    authorText: {
      fontSize: 15,
    },
  });
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleText}> {title} </Text>
      <Text style={styles.authorText}> by {author} </Text>
    </TouchableOpacity>
  );
};

/** ここからはREST Server Clientロジック **/

import axios from 'axios';
const request = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
});
// REST Serverからデータを取得する関数
const getDataFromServer = async (): Promise<BookCard | undefined> => {
  const res = await request.get('/posts');
  if (res.data) {
    return res.data[0] as BookCard;
  }
  return undefined;
};

export default App;
