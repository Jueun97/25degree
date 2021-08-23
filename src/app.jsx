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
      data.map((d) => (d.images = d.images.split(",")));
      data.reverse();
      setPosts(data);
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
    const newUser = {
      userId: userData.userId,
      name: userData.name,
      gender: userData.gender || null,
      password: userData.password,
      email: userData.email,
      profile: userData.profile,
    };
    getData.addUser(newUser);
  };
  const updateUser = (userData) => {
    getData.updateUser(userData);
  };
  const uploadPost = (post) => {
    const tempPosts = [...posts];
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
/*     tempPosts.push(newPost); */
    getData.getPost().then((data) => {
      data.map((d) => (d.images = d.images.split(",")));
      data.reverse();
      setPosts(data);
    });
/*     setPosts(tempPosts);  */
  };
  const updatePost = (postId, message, userId) => {
    const tempPosts = [...posts];
    tempPosts.map((post) => {
      if (post.postId === postId) post.description = message;
      return post;
    });
    getData.updatePost({ postId, message, userId });
    setPosts(tempPosts);
  };
  const deletePost = (postId, userId) => {
    let tempPosts = [...posts];
    tempPosts = tempPosts.filter((post) => {
      return post.postId !== postId;
    });
    getData.deletePost(postId, userId);
    setPosts(tempPosts);
  };
  const uploadComment = (upload_data) => {
    const tempComments = [...comments];
    tempComments.push(upload_data);
   // setComments(tempComments);
    getData.uploadComment(upload_data);
    getData.getComment().then((data) => {
      setComments(data);
    });
  };
  const pushLikes = (postId, userId) => {
    const tempLikes = [...likes];
    tempLikes.push({ likeId: new Date(), userId: userId, postId: postId });
    getData.uploadLikes({ postId, userId });
    setLikes(tempLikes);
  };
  const popLikes = (postId, userId) => {
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
