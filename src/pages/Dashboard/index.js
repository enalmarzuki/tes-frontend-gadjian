import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  Beranda,
  Button,
  Daily,
  Header,
  Personnel,
  Sidebar,
} from "../../components";
import { getUser } from "../../config/redux/action";

export default function Dashboard(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [spliceArr, setSpliceArr] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.userReducer);

  const nextPage = () => {
    setStartIndex(startIndex + 4);
    if (endIndex !== users.dataUser.length - 1) {
      setEndIndex(endIndex + 4);
    } else {
      setEndIndex(endIndex);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
    } else {
      setStartIndex(0);
    }
    setEndIndex(endIndex - 4);
  };

  useEffect(() => {
    if (users?.dataUser?.length === 0) {
      return dispatch(getUser({ page: 1 }));
    } else {
      const tempUser = [];
      for (let i = startIndex; i <= endIndex; i++) {
        tempUser.push(users.dataUser[i]);
      }
      setSpliceArr(tempUser);
      return;
    }
  }, [dispatch, users.dataUser.length, users.dataUser, startIndex, endIndex]);

  return (
    <div className="h-screen bg-gray-50">
      <Header onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
      <Sidebar onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />

      {history.location.pathname === "/" && <Beranda />}

      {history.location.pathname === "/personel-list" && (
        <>
          <Personnel
            users={spliceArr}
            isLoading={users.loading}
            startIndex={startIndex}
            endIndex={endIndex}
            length={users.dataUser.length - 1}
            nextPage={() => nextPage()}
            prevPage={() => prevPage()}
          />
        </>
      )}

      {history.location.pathname === "/daily-attendance" && <Daily />}

      <Button type="button-scroll-top" />
    </div>
  );
}
