import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment, updateComment } from '../../redux/comments';
import { useModal } from '../../context/Modal';

const CommentCreateModal = ({ pinId, comment }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [text, setText] = useState(comment ? comment.text : '');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!text.trim()) { 
            setErrors(['Text is required']);
            return;
        }

        if (comment) {
            await dispatch(updateComment(comment.id, text));
        } else {
            await dispatch(createComment(pinId, text));
        }
        closeModal();
    };

    return (
        <div className="comment-form-overlay">
            <form onSubmit={handleSubmit} className="comment-form">
                <textarea
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Enter your comment..."
                />
                {errors.length > 0 && <div className="error">{errors[0]}</div>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentCreateModal;