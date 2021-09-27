import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Main from './component/pages/main/main';
import Mypage from "./component/pages/mypage/mypage";
import User from "./component/pages/user/user";
import Upload from "./component/pages/upload/upload";
import Detail from "./component/pages/detail/detail";

function App({ authService, getData, uploadImages }) {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData.getPost().then((data) => {
      data.map((d) => (d.images = d.images.split(",")));
      data.reverse();
      setPosts(data);
    });
    getData.getLikes().then((data) => {
      setLikes(data);
    });

    getData //
    .getUserInfo()
    .then((data) => setUsers(data));

  }, [getData]);

  const uploadPost = (post) => {
    getData.uploadPost(post);

    getData.getPost().then((data) => {
      data.map((d) => (d.images = d.images.split(",")));
      data.reverse();
      setPosts(data);
    });
  };

  const deletePost = (postId, userId) => {
    getData.deletePost(postId, userId);

    getData.getPost().then((data) => {
      data.map((d) => (d.images = d.images.split(",")));
      data.reverse();
      setPosts(data);
    });
  };
  
  const joinUser = (user) => {
    const newUser = {
      userId: user.userId,
      name: user.name,
      gender: user.gender || null,
      password: user.password,
      email: user.email,
      profile: user.profile || null,
    };
    getData.addUser(newUser);

    getData //
    .getUserInfo()
    .then((data) => setUsers(data));
  };

  const updateUser = (user) => {
    getData.updateUser(user);

    getData //
    .getUserInfo()
    .then((data) => setUsers(data));
  }
  const onPushLikes = (userId,postId) => {
    const tempLikes = [...likes];
    tempLikes.push({ likeId: new Date(), userId: userId, postId: postId });
    getData.uploadLikes({ postId, userId });
    setLikes(tempLikes);

};
const onPopLikes = (userId, postId) => {
    const tempLikes = [...likes];
    const index = tempLikes.findIndex(like => like.postId === postId && like.userId === userId);
  tempLikes.splice(index, 1);
  setLikes(tempLikes);
    getData.deleteLikes({ postId, userId });
};

  

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main getData={getData} posts={posts}/>
          </Route>
          <Route exact path="/login">
            <User authService={authService} userHandler={joinUser} getData={getData} users={users} status="login"/>
          </Route>
          <Route exact path="/findUser">
            <User users={users} status="find" />
          </Route>
          <Route exact path="/joinUser">
            <User uploadImages={uploadImages} userHandler={joinUser} users={users} status="join" />
          </Route>
          <Route exact path="/settings">
            <User userHandler={updateUser} users={users} status="edit" uploadImages={uploadImages}/>
          </Route>
          <Route exact path="/mypage">
            <Mypage posts={posts} likes={likes}/>
          </Route>
          <Route exact path="/upload">
            <Upload uploadPost={uploadPost} uploadImages={uploadImages}/>
          </Route>
          <Route path="/detail">
            <Detail getData={getData} posts={posts} likes={likes} users={users} onPushLikes={onPushLikes} onPopLikes={onPopLikes} deletePost={deletePost}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;


