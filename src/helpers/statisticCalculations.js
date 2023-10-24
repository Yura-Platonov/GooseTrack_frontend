const statisticCalculations = (monthTasks, selectedDate) => {
  const formattedSelectedDate = selectedDate?.toISOString().split('T')[0];
  const dayTasks = monthTasks?.filter(
    (task) => task.date === formattedSelectedDate,
  );

  const todoByDay = dayTasks?.filter(
    (task) => task.category === 'to-do',
  ).length;

  const inprogressByDay = dayTasks?.filter(
    (task) => task.category === 'in-progress',
  ).length;
  const doneByDay = dayTasks?.filter((task) => task.category === 'done').length;

  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;

  const todoByMonth = monthTasks?.filter(
    (task) => task.category === 'to-do',
  ).length;
  const inprogressByMonth = monthTasks?.filter(
    (task) => task.category === 'in-progress',
  ).length;
  const doneByMonth = monthTasks?.filter(
    (task) => task.category === 'done',
  ).length;

  const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;

  const roundPercentage = (value) => Math.round(value * 100);

  return {
    todoByDayPercentage: roundPercentage(todoByDay / allTasksByDay) || 0,
    inprogressByDayPercentage:
      roundPercentage(inprogressByDay / allTasksByDay) || 0,
    doneByDayPercentage: roundPercentage(doneByDay / allTasksByDay) || 0,
    todoByMonthPercentage: roundPercentage(todoByMonth / allTasksByMonth) || 0,
    inprogressByMonthPercentage:
      roundPercentage(inprogressByMonth / allTasksByMonth) || 0,
    doneByMonthPercentage: roundPercentage(doneByMonth / allTasksByMonth) || 0,
  };
};

export default statisticCalculations;
