import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, Typography, Radio } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
    <Box sx={{ padding: '20px', height: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <IconButton onClick={handleBackButton}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: '10px' }}>
          {view === 'main' ? 'Settings' : view === 'currency' ? 'Currency' : 'Language'}
        </Typography>
      </Box>

      {/* Content */}
      {view === 'main' && renderMainSettings()}
      {view === 'currency' && renderCurrencySettings()}
      {view === 'language' && renderLanguageSettings()}
    </Box>
  );
};

export default Settings;
