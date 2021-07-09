import React from 'react';
import RestoService from '../../services/resto-service'

const restoService = new RestoService();

const RestoServiceContext = React.createContext(restoService);

export default RestoServiceContext;