import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./component/header/header";
import Section from "./component/section/section";
import Inform from "./component/user_inform/inform";
import Upload from "./component/uplaod/upload";
import Mypage from "./component/mypage/mypage";
import Details from "./component/details/details";
import Posts from "./component/posts/posts";

function App({ authService, getData, uploadImages }) {
  const [city, setCity] = useState("location");
  const [user, setUser] = useState([]);

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    getData.getPost().then((data) => {
      let tempdata = [...data];
      tempdata.map((data) => (data.images = data.images.split(",")));
      setPosts(tempdata);
      tempdata = tempdata.filter((post) => post.userId === "zxnm1234");
      setFilteredPosts(tempdata);
    });
    getData.getComment().then((data) => {
      setComments(data);
    });
    getData.getLikes().then((data) => {
      setLikes(data);
    });
    getData //
      .getUserInfo()
      .then((datas) => setUser(datas));
  }, [getData]);

  const changeCity = (cityData) => {
    setCity(cityData);
  };
  const loginedUser = (userData) => {
    const tempUser = [...user];
    const newUser = {
      userId: userData.userId,
      name: userData.name,
      gender: null,
      password: userData.password,
      email: userData.email,
      profile: null,
    };
    tempUser.push(newUser);
    getData.addUser(newUser);
  };
  const joinUser = (userData) => {
    const tempUser = [...user];
    const joinUser = {
      userId: userData.userId,
      name: userData.name,
      gender: userData.gender,
      password: userData.password,
      email: userData.email,
      profile: null,
    };
    tempUser.push(joinUser);
    getData.addUser(joinUser);
  };
  const uploadPost = (post) => {
    const tempPosts = [...posts];
    const tempFilteredPosts = [...filteredPosts];
    const postId = new Date();
    const newPost = {
      postId: postId,
      userId: post.userId,
      images: post.imagesUrl,
      description: post.message,
      gender: post.gender,
      overcoat: post.overcoat,
      top: post.top,
      constitution: post.type,
      underwear: post.underwear,
      suitablity: post.suitablity,
      style: post.style,
      degree: "degree",
      region: "region",
    };
    getData.uploadPost(newPost);
    tempPosts.push(newPost);
    setPosts(tempPosts);
    tempFilteredPosts.push(newPost);
    setFilteredPosts(tempFilteredPosts);
  };
  const updatePost = (postId, message, userId) => {
    const tempPosts = [...filteredPosts];
    tempPosts.map((post) => {
      if (post.postId === postId) post.description = message;
      return post;
    });
    getData.updatePost({ postId, message, userId });
    console.log("update post posts, filteredposts", posts, filteredPosts);
    setFilteredPosts(tempPosts);
  };
  const deletePost = (postId, userId) => {
    const tempPosts = [...posts];
    let tempFilteredPosts = [...filteredPosts];
    tempFilteredPosts = tempFilteredPosts.filter((post) => {
      return post.postId !== postId;
    });
    getData.deletePost(postId, userId);
    setPosts(tempPosts);
    setFilteredPosts(tempFilteredPosts);
  };
  const uploadComment = (upload_data) => {
    const tempComments = [...comments];
    tempComments.push(upload_data);
    getData.uploadComment(upload_data);
    setComments(tempComments);
  };
  const pushLikes = (postId, userId) => {
    //userId 정보도 필요함!!
    const tempLikes = [...likes];
    tempLikes.push({ likeId: new Date(), userId: userId, postId: postId });
    getData.uploadLikes({ postId, userId });
    setLikes(tempLikes);
  };
  const popLikes = (postId, userId) => {
    //userId 정보도 필요함!!
    const tempLikes = [...likes];
    const index = tempLikes.findIndex(
      (like) => like.postId === postId && like.userId === userId
    );
    tempLikes.splice(index, 1);
    getData.deleteLikes({ postId, userId });
    setLikes(tempLikes);
  };
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header
              authService={authService}
              userId={null}
              changeCity={changeCity}
            />
            <Section getData={getData} city={city} />
            <Posts posts={posts}></Posts>
          </Route>
          <Route exact path="/login">
            <Inform
              authService={authService}
              user={user}
              loginedUser={loginedUser}
              joinUser={joinUser}
            />
          </Route>
          <Route exact path="/mypage">
            <Mypage posts={filteredPosts} likes={likes}></Mypage>
          </Route>
          <Route exact path="/upload">
            <Upload
              uploadPost={uploadPost}
              uploadImages={uploadImages}
            ></Upload>
          </Route>
          <Route path="/detail">
            <Details
              data={filteredPosts}
              updatePost={updatePost}
              deletePost={deletePost}
              comments={comments}
              uploadComment={uploadComment}
              likes={likes}
              pushLikes={pushLikes}
              popLikes={popLikes}
            ></Details>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
