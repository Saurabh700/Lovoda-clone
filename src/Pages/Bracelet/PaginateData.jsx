import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./PaginateData.module.css";

export default function PaginateData(props) {
  const { data } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {currentItems.map((item) => (
          <div key={item.id}>
            <img style={{ width: "200px" }} src={item.img1} alt="" />
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<previous"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageNum}
        previousLinkClassName={styles.pageNum}
        nextLinkClassName={styles.pageNum}
        activeLinkClassName={styles.active}
      />
    </>
  );
}
