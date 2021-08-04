import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./component/header/header";
import Section from "./component/section/section";
import Inform from "./component/user_inform/inform";
import Upload from "./component/uplaod/upload";
import Mypage from "./component/mypage/mypage";
import Details from "./component/details/details";
import GoogleMap from "./service/geocode";

function App({ authService, getData, uploadImages }) {
  const [city, setCity] = useState("location");
  const [user, setUser] = useState([]);

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [data, setData] = useState({
    currentTemp: null,
    currentIcon: null,
    daily: null,
    hourly: null,
  });
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (city === "location") {
      navigator.geolocation.getCurrentPosition((pos) => {
        getData //
          .getWeather(pos.coords.latitude, pos.coords.longitude)
          .then((datas) =>
            setData({
              currentTemp: datas.current.temp,
              currentIcon: datas.current.weather[0].icon,
              daily: datas.daily,
              hourly: datas.hourly,
            })
          );
        GoogleMap(pos.coords.latitude, pos.coords.longitude).then((res) => {
          setAddress(res);
        });
      });
    } else {
      getData //
        .getWeather(city[0].coord.lat, city[0].coord.lon)
        .then((datas) => {
          console.log(datas);
          setData({
            currentTemp: datas.current.temp,
            currentIcon: datas.current.weather[0].icon,
            daily: datas.daily,
            hourly: datas.hourly,
          });
        });
      setAddress({ state: "", city: city[0].value });
    }
    getData.getPost().then((data) => {
      let tempdata = [...data];
      tempdata.map((data) => (data.images = data.images.split(",")));
      setPosts(tempdata);
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
  }, [getData, city]);

  const changeCity = (cityData) => {
    setCity(cityData);
  };
  const joinUser = (userData) => {
    const tempUser = [...user];
    const newUser = {
      userId: userData.userId,
      name: userData.name,
      gender: userData.gender || null,
      password: userData.password,
      email: userData.email,
      profile: userData.profile,
    };
    tempUser.push(newUser);
    getData.addUser(newUser);
  };
  const filterPosts = (userId) => {
    console.log("filter!!!1111", posts);
    let tempPosts = [...posts];
    tempPosts = tempPosts.filter((post) => post.userId === userId);
    setFilteredPosts(tempPosts);
    console.log("filter!!!222", filteredPosts);
  };
  const uploadPost = (post) => {
    const tempPosts = [...posts];
    const tempFilteredPosts = [...filteredPosts];
    const postId = new Date();
    const newPost = {
      postId: postId,
      userId: post.userId,
      images: post.imagesUrl,
      description: post.description,
      gender: post.gender,
      overcoat: post.overcoat,
      top: post.top,
      constitution: post.type,
      underwear: post.underwear,
      suitablity: post.suitablity,
      style: post.style,
      degree: post.degree,
      region: post.region,
    };
    getData.uploadPost(newPost);
    tempPosts.push(newPost);
    setPosts(tempPosts);
    tempFilteredPosts.push(newPost);
    setFilteredPosts(tempFilteredPosts);
  };
  const updatePost = (postId, message, userId) => {
    const tempPosts = [...posts];
    const tempFilteredPosts = [...filteredPosts];
    tempPosts.map((post) => {
      if (post.postId === postId) post.description = message;
      return post;
    });
    tempFilteredPosts.map((post) => {
      if (post.postId === postId) post.description = message;
      return post;
    });
    getData.updatePost({ postId, message, userId });
    console.log("update post posts, filteredposts", posts, filteredPosts);
    setPosts(tempPosts);
    setFilteredPosts(tempFilteredPosts);
  };
  const updateUser = (userData) => {
    getData.updateUser(userData);
  };
  const deletePost = (postId, userId) => {
    let tempPosts = [...posts];
    let tempFilteredPosts = [...filteredPosts];
    tempPosts = tempPosts.filter((post) => {
      return post.postId !== postId;
    });
    tempFilteredPosts = tempFilteredPosts.filter((post) => {
      return post.postId !== postId;
    });
    getData.deletePost(postId, userId);
    setPosts(tempPosts);
    setFilteredPosts(tempFilteredPosts);
    console.log("delete", posts, filteredPosts);
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
            <Section data={data} address={address} posts={posts} user={user} />
          </Route>
          <Route exact path="/login">
            <Inform
              authService={authService}
              user={user}
              joinUser={joinUser}
              uploadImages={uploadImages}
            />
          </Route>
          <Route exact path="/settings">
            <Inform
              authService={authService}
              actionStatus={"join"}
              updateUser={updateUser}
              user={user}
              uploadImages={uploadImages}
            ></Inform>
          </Route>
          <Route exact path="/mypage">
            <Mypage
              filterPosts={filterPosts}
              filteredPostsOriginal={filteredPosts}
              posts={posts}
              likes={likes}
              user={user}
            ></Mypage>
          </Route>
          <Route exact path="/upload">
            <Upload
              uploadPost={uploadPost}
              uploadImages={uploadImages}
              locationInfo={address}
              data={data}
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
              user={user}
            ></Details>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
