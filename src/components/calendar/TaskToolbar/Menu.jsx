import { useEffect } from 'react';
import { MenuContent, ArrowSvg, List, Button } from './Menu.styled';
import { useDispatch } from 'react-redux';
// import { changeCategory } from '../../../redux/task/operations';
import { TASK_STATUS } from '../../../constants/Status';
import PropTypes from 'prop-types';
import { editTask } from '../../../redux/task/operations';

export const Menu = ({ task, toggleMenu }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      toggleMenu();
    }
  };

  const dispatch = useDispatch();

  let otherStatusList = TASK_STATUS.filter(
    (status) => status.name !== task.category,
  );

  return (
    <MenuContent>
      <List>
        {otherStatusList.map((status) => (
          <li key={status.id}>
            <Button
              type="button"
              onClick={() =>
                dispatch(
                  // changeCategory({
                  //   id: task._id,
                  //   categoryData: { category: status.name },
                  // }),
                  editTask({
                    id: task._id,
                    dataTask: { category: status.name },
                  }),
                )
              }
            >
              {status.name}
              <ArrowSvg />
            </Button>
          </li>
        ))}
      </List>
    </MenuContent>
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
