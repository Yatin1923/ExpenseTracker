import React, { useState } from 'react';
import './settings.css';
import { Box, List,Container, ListItem, ListItemText, IconButton, Typography, Radio } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from "@mui/icons-material";
const Settings = () => {
  const [view, setView] = useState<'main' | 'currency' | 'language'>('main');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigate = useNavigate();

  const handleBackButton = () => {
    if (view === 'main') {
      navigate('/home/profile'); // Or any other route you want to go back to
    } else {
      setView('main');
    }
  };

  const renderMainSettings = () => (
    <List>
      <ListItem button onClick={() => setView('currency')}>
        <ListItemText primary="Currency" secondary={selectedCurrency} />
      </ListItem>
      <ListItem button onClick={() => setView('language')}>
        <ListItemText primary="Language" secondary={selectedLanguage} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Theme" secondary="Dark" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Security" secondary="Fingerprint" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Notification" />
      </ListItem>
      <ListItem>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Help" />
      </ListItem>
    </List>
  );

  const renderCurrencySettings = () => (
    <List>
      {['USD', 'IDR', 'JPY', 'RUB', 'EUR', 'WON'].map((currency) => (
        <ListItem key={currency} button onClick={() => setSelectedCurrency(currency)}>
          <ListItemText primary={currency} />
          <Radio
            checked={selectedCurrency === currency}
            onChange={() => setSelectedCurrency(currency)}
            value={currency}
            name="currency-radio"
          />
        </ListItem>
      ))}
    </List>
  );

  const renderLanguageSettings = () => (
    <List>
      {['English', 'Indonesian', 'Arabic', 'Chinese', 'Dutch', 'French', 'German', 'Italian', 'Korean', 'Portuguese', 'Russian', 'Spanish'].map((language) => (
        <ListItem key={language} button onClick={() => setSelectedLanguage(language)}>
          <ListItemText primary={language} />
          <Radio
            checked={selectedLanguage === language}
            onChange={() => setSelectedLanguage(language)}
            value={language}
            name="language-radio"
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Container sx={{ padding: '10px', height: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      {/* <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <IconButton onClick={handleBackButton}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: '10px' }}>
          {view === 'main' ? 'Settings' : view === 'currency' ? 'Currency' : 'Language'}
        </Typography>
      </Box> */}
       <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
         <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            color: "#212325",
            fontWeight: "bold",
            mb: 3,
            position: "relative",
          }}
        >
        <IconButton
          onClick={handleBackButton}
          sx={{
            color: "#212325",
            fontWeight: "bold",
            position: "absolute",
            left: 0,
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "#212325",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          {view === 'main' ? 'Settings' : view === 'currency' ? 'Currency' : 'Language'}
        </Typography>
        </Box>
      </Box>
    </Container>

      {/* Content */}
      {view === 'main' && renderMainSettings()}
      {view === 'currency' && renderCurrencySettings()}
      {view === 'language' && renderLanguageSettings()}
    </Container>
  );
};

export default Settings;
