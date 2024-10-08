export const shiftTableDataSource = [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
  return {
    userId: index + 1,
    firstName: "John",
    lastName: "Doe",
    department: "Engineering",
    deviceStatus: "Active",
    healthStatus: "Good",
    location: "New York",
    shiftInOrShiftOut: "In-Shift",
    shiftDuration: "8 hours",
    alert: "No Alert",
  };
});

export const sortTableDataSource = [1, 2, 3, 4].map((item, index) => {
  return {
    userId: index + 1,
    firstName: "John",
    lastName: "Doe",
    department: "Engineering",
    deviceStatus: "Active",
    healthStatus: "Good",
    location: "New York",
    shiftInOrShiftOut: "In-Shift",
    shiftDuration: "8 hours",
    alert: "No Alert",
  };
});
