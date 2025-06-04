```
// Project Structure Overview

// src/theme.js import { createTheme } from '@mui/material/styles';

const theme = createTheme({ typography: { fontFamily: 'Poppins, sans-serif', }, palette: { primary: { main: '#b3bce6', // Lavender blue }, secondary: { main: '#f7c8e0', // Soft pink }, }, shape: { borderRadius: 16, }, });

export default theme;

// src/App.js import React from 'react'; import { ThemeProvider, CssBaseline, Box } from '@mui/material'; import theme from './theme'; import Dashboard from './pages/Dashboard';

function App() { return ( <ThemeProvider theme={theme}> <CssBaseline /> <Box sx={{ p: 4 }}> <Dashboard /> </Box> </ThemeProvider> ); }

export default App;

// src/pages/Dashboard.jsx import React, { useState } from 'react'; import { Grid, Typography } from '@mui/material'; import SummaryCards from '../components/SummaryCards'; import FindingsChart from '../components/FindingsChart'; import FindingsPieChart from '../components/FindingsPieChart'; import FindingsTable from '../components/FindingsTable';

const Dashboard = () => { const [selectedScanType, setSelectedScanType] = useState(null);

return ( <Grid container spacing={4}> <Grid item xs={12}> <SummaryCards /> </Grid> <Grid item xs={12} md={6}> <FindingsChart /> </Grid> <Grid item xs={12} md={6}> <FindingsPieChart onSelectType={setSelectedScanType} /> </Grid> <Grid item xs={12}> {selectedScanType ? ( <> <Typography variant="subtitle1" gutterBottom> Showing findings for scan type: <strong>{selectedScanType}</strong> </Typography> <FindingsTable filterType={selectedScanType} /> </> ) : ( <Typography variant="body2" color="text.secondary"> Click on a pie chart section to view related findings. </Typography> )} </Grid> </Grid> ); };

export default Dashboard;

// src/components/SummaryCards.jsx import React from 'react'; import { Card, CardContent, Typography, Grid } from '@mui/material'; import data from '../data/data.json';

const SummaryCards = () => { const highFindings = data.findings.filter(f => f.severity.toLowerCase() === 'high').length; return ( <Grid container spacing={2}> <Grid item xs={12} md={3}> <Card> <CardContent> <Typography variant="h6">Target URL</Typography> <Typography>{data.target_url}</Typography> </CardContent> </Card> </Grid> <Grid item xs={12} md={3}> <Card> <CardContent> <Typography variant="h6">Scan Duration</Typography> <Typography>{Math.round(data.duration_seconds)}s</Typography> </CardContent> </Card> </Grid> <Grid item xs={12} md={3}> <Card> <CardContent> <Typography variant="h6">Total Findings</Typography> <Typography>{data.findings.length}</Typography> </CardContent> </Card> </Grid> <Grid item xs={12} md={3}> <Card> <CardContent> <Typography variant="h6">High Risk Findings</Typography> <Typography>{highFindings}</Typography> </CardContent> </Card> </Grid> </Grid> ); };

export default SummaryCards;

// src/components/FindingsChart.jsx import React from 'react'; import { Card, CardContent, Typography } from '@mui/material'; import { Line } from 'react-chartjs-2'; import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, } from 'chart.js'; import data from '../data/data.json';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const FindingsChart = () => { const severityCounts = { High: 0, Medium: 0, Low: 0 }; data.findings.forEach(f => { const sev = f.severity.charAt(0).toUpperCase() + f.severity.slice(1).toLowerCase(); if (severityCounts[sev] !== undefined) severityCounts[sev]++; });

const chartData = { labels: ['High', 'Medium', 'Low'], datasets: [ { label: 'Findings by Severity', data: Object.values(severityCounts), borderColor: '#b3bce6', backgroundColor: 'rgba(179, 188, 230, 0.2)', tension: 0.4, fill: true, }, ], };

const options = { responsive: true, plugins: { legend: { display: false }, }, };

return ( <Card> <CardContent> <Typography variant="h6" gutterBottom> Severity Overview </Typography> <Line data={chartData} options={options} /> </CardContent> </Card> ); };

export default FindingsChart;

// src/components/FindingsPieChart.jsx import React from 'react'; import { Pie } from 'react-chartjs-2'; import { Card, CardContent, Typography } from '@mui/material'; import data from '../data/data.json'; import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FindingsPieChart = ({ onSelectType }) => { const scanTypeCounts = data.scan_types.reduce((acc, type) => { acc[type] = data.findings.filter(f => f.scan_type === type).length; return acc; }, {});

const pieData = { labels: Object.keys(scanTypeCounts), datasets: [ { data: Object.values(scanTypeCounts), backgroundColor: ['#b3bce6', '#f7c8e0', '#c2e7d9'], borderWidth: 1, }, ], };

const onClick = (e, elements) => { if (elements.length > 0) { const index = elements[0].index; const selectedLabel = pieData.labels[index]; onSelectType(selectedLabel); } };

return ( <Card> <CardContent> <Typography variant="h6" gutterBottom> Findings by Scan Type </Typography> <Pie data={pieData} onClick={(event, elements) => onClick(event, elements)} /> </CardContent> </Card> ); };

export default FindingsPieChart;

// src/components/FindingsTable.jsx import React, { useState } from 'react'; import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, } from '@mui/material'; import data from '../data/data.json';

const FindingsTable = ({ filterType }) => { const [selectedFinding, setSelectedFinding] = useState(null);

const handleRowClick = (finding) => { setSelectedFinding(finding); };

const handleClose = () => { setSelectedFinding(null); };

const filteredFindings = filterType ? data.findings.filter(f => f.scan_type === filterType) : data.findings;

return ( <Card> <CardContent> <Typography variant="h6" gutterBottom> Findings Table </Typography> <TableContainer> <Table size="small"> <TableHead> <TableRow> <TableCell>Type</TableCell> <TableCell>Severity</TableCell> <TableCell>Description</TableCell> <TableCell>Scan Type</TableCell> </TableRow> </TableHead> <TableBody> {filteredFindings.map((row, i) => ( <TableRow key={i} hover onClick={() => handleRowClick(row)} sx={{ cursor: 'pointer' }}> <TableCell>{row.type}</TableCell> <TableCell>{row.severity}</TableCell> <TableCell>{row.description}</TableCell> <TableCell>{row.scan_type}</TableCell> </TableRow> ))} </TableBody> </Table> </TableContainer>

{/* Dialog for details */}
    <Dialog open={!!selectedFinding} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>{selectedFinding?.type}</DialogTitle>
      <DialogContent>
        <Typography gutterBottom><strong>Severity:</strong> {selectedFinding?.severity}</Typography>
        <Typography gutterBottom><strong>Description:</strong> {selectedFinding?.description}</Typography>
        {selectedFinding?.url && (
          <Typography gutterBottom><strong>URL:</strong> {selectedFinding.url}</Typography>
        )}
      </DialogContent>
    </Dialog>
  </CardContent>
</Card>

); };

export default FindingsTable;
```
