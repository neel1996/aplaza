export default function projectcount(req, res) {
  res.json({
    totalProjectCount: 10,
    overdueProjectCount: 5,
    completedProjectCount: 2,
  });
}
