import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import NewsDataService from "../services/news.services";

const NewsList = ({ getNewsId }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const data = await NewsDataService.getAllNews();
    console.log(data.docs);
    setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await NewsDataService.deleteNews(id);
    getNews();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getNews}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(news, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>News Title</th>
            <th>News Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getNewsId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default NewsList;
