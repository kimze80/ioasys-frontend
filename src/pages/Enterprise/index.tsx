import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Content, EnterpriseCard } from './styles';
import Topbar from '../../components/Topbar';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import { EnterpriseData } from '../../entities/Enterprise';
import api from '../../services/api';

interface EnterpriseProps {
  id: string;
}

const Enterprise: React.FC = () => {
  const [enterprise, setEnterprise] = useState<EnterpriseData>();
  const [loading, setLoading] = useState<number>(0);
  const history = useHistory();
  const { id } = useParams<EnterpriseProps>();

  const goBack = useCallback(() => {
    history.push('/home');
  }, [history]);

  useEffect(() => {
    const token = localStorage.getItem('ioasys:token');
    const client = localStorage.getItem('ioasys:client');
    const uid = localStorage.getItem('ioasys:uid');

    (async () => {
      try {
        setLoading(1);
        const response = await api.get('/enterprises', {
          headers: {
            'Content-Type': 'application/json',
            'access-token': token,
            client,
            uid,
          },
        });

        const data = response.data.enterprises;
        const findEnterprise = data.find(
          (e: EnterpriseData) => e.id?.toString() === id,
        );
        setEnterprise(findEnterprise);
        setLoading(0);
      } catch (error) {
        setLoading(0);

        console.log(error);
      }
    })();
  }, [id]);

  return (
    <Container>
      <Loader loading={loading} />
      <Topbar className="topbar-enterprise">
        <div className="enperprise-name-container">
          <Button
            transparent
            className="goback-button"
            icon={<img src={arrowLeftIcon} alt="" />}
            onClick={goBack}
          />
          <p className="enterprise-name">{enterprise?.enterprise_name}</p>
        </div>
      </Topbar>
      <Content>
        <EnterpriseCard>
          {enterprise?.photo && (
            <img
              src={`https://empresas.ioasys.com.br${enterprise?.photo}`}
              alt=""
            />
          )}
          <p className="enterprise-description">{enterprise?.description}</p>
        </EnterpriseCard>
      </Content>
    </Container>
  );
};

export default Enterprise;
