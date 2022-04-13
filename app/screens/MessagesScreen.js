import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/AppBasic/Screen";
import Separator from "../components/list/Separator";
import ListItem from "../components/list/ListItem";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            swipRight={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log("Message Selected", item)}
            title={item.title}
            subtitle={item.description}
            image={item.image}
            showChevrons={true}
            numberOfLines={2}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
