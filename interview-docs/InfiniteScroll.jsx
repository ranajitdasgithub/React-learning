import React, { useEffect, useState, useRef } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const res = await fetch(`${API_URL}?_page=${page}&_limit=10`);
    const data = await res.json();
    setItems((prevItems) => [...prevItems, ...data]);
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader]);

  return (
    <>
      <h1>Infinite Scroll</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div
        ref={loader}
        style={{ height: "20px", backgroundColor: "lightgray" }}
      >
        Loading...
      </div>
    </>
  );
};

export default InfiniteScroll;

