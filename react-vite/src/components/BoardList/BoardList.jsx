import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  thunkFetchBoards,
  thunkCreateBoard,
  thunkUpdateBoard,
  thunkDeleteBoard
} from "../../redux/board";
import "./BoardList.css";

const BoardsList = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const boardsObj = useSelector((state) => state.board?.entries || {});
  const boards = Object.values(boardsObj);

  useEffect(() => {
    dispatch(thunkFetchBoards());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    dispatch(thunkCreateBoard({ name: newName.trim() }));
    setNewName("");
  };

  const zeroPad = (n) => (n < 10 ? `0${n}` : `${n}`);

  const handleUpdate = (board) => {
    // Placeholder: open modal or inline edit logic
    const updatedName = prompt("Update board name:", board.name);
    if (updatedName && updatedName.trim() && updatedName !== board.name) {
      dispatch(thunkUpdateBoard(board.id, { name: updatedName.trim() }));
    }
  };

  const handleDelete = (board) => {
    if (
      window.confirm(
        `Are you sure you want to delete the board "${board.name}"?`
      )
    ) {
      dispatch(thunkDeleteBoard(board.id));
    }
  };

  return (
    <div className="boards-page">
      <h1 className="boards-title">Boards</h1>

      <form className="add-board-form" onSubmit={handleAdd}>
        <input
          type="text"
            className="add-board-input"
          placeholder="Add New Board"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          maxLength={50}
        />
        <button className="add-board-btn" type="submit">
          Add
        </button>
      </form>

      {boards.length ? (
        <div className="boards-grid">
          {boards.map((board) => {
            const pinCount = board.pins ? board.pins.length : 0;
            return (
              <div key={board.id} className="board-card">
                <div className="board-thumb">
                  {/* If you have a cover image: <img src={board.coverUrl} alt={board.name} /> */}
                  <button
                    type="button"
                    className="board-menu-btn"
                    aria-label="Board options"
                    onClick={() => alert("Open menu (implement modal/popover)")}
                  >
                    …
                  </button>
                </div>

                <div className="board-name-row">
                  <span className="board-name">{board.name}</span>
                  <span className="board-count">
                    ({zeroPad(pinCount)})
                  </span>
                </div>

                <div className="board-actions">
                  <button
                    type="button"
                    className="board-btn update"
                    onClick={() => handleUpdate(board)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="board-btn delete"
                    onClick={() => handleDelete(board)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-boards">No boards found.</p>
      )}
    </div>
  );
};

export default BoardsList;
