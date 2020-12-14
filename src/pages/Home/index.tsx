import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, ResultCard } from './styles';
import Topbar from '../../components/Topbar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import logoWhite from '../../assets/logo-nav.png';
import searchIcon from '../../assets/icons/ic-search-copy.svg';
import api from '../../services/api';
import { EnterpriseData } from '../../entities/Enterprise';

const Home: React.FC = () => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>('');
  const [enterprisesList, setEnterprisesList] = useState<[]>();
  const [loading, setLoading] = useState<number>(0);
  const [enterpriseNotFoundMessage, setEnterpriseNotFoundMessage] = useState<
    string
  >('');

  useEffect(() => {
    const token = localStorage.getItem('ioasys:token');
    const client = localStorage.getItem('ioasys:client');
    const uid = localStorage.getItem('ioasys:uid');

    (async () => {
      try {
        setLoading(1);
        const res = await api.get(`/enterprises`, {
          headers: {
            'Content-Type': 'application/json',
            'access-token': token,
            client,
            uid,
          },
        });
        setEnterprisesList(res.data.enterprises);
        setLoading(0);
      } catch (error) {
        console.log(error);
        setLoading(0);
      }
    })();
  }, []);

  const enterprises = useMemo(() => {
    return enterprisesList?.filter((e: EnterpriseData) => {
      const enterprise = e.enterprise_name
        ?.toLowerCase()
        .includes(searchName.toLowerCase());

      if (enterprise) {
        return enterprise;
      }

      setEnterpriseNotFoundMessage(
        'Nenhuma empresa foi encontrada para a busca realizada.',
      );
    });
  }, [enterprisesList, searchName]);

  return (
    <Container>
      <Loader loading={loading} />
      <Topbar className="topbar-home">
        {toggleSearch ? (
          <div className="logo-container">
            <img src={logoWhite} alt="" />
            <Button
              transparent
              icon={<img src={searchIcon} alt="" />}
              className="button-search"
              onClick={() => setToggleSearch(!toggleSearch)}
            />
          </div>
        ) : (
          <form>
            <Input
              icon={<img src={searchIcon} alt="" />}
              placeholder="Pesquisar"
              clearInputButton
              autoFocus
              onChange={(e) => {
                setSearchName(e.currentTarget.value);
                !e.currentTarget.value.length &&
                  setEnterpriseNotFoundMessage('');
              }}
              closeInputOnClick={() => setToggleSearch(!toggleSearch)}
            />
          </form>
        )}
      </Topbar>
      {!toggleSearch ? (
        <Content>
          {searchName && enterprises?.length !== 0 ? (
            enterprises?.map((e: EnterpriseData) => (
              <Link
                to={`/enterprise/${e.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                key={e?.id}
              >
                <ResultCard key={e?.id}>
                  <div className="enterprise-photo">
                    <img
                      src={`https://empresas.ioasys.com.br${e?.photo}`}
                      alt=""
                    />
                  </div>
                  <div className="enterprise-profile">
                    <p className="enterprise-name">{e.enterprise_name}</p>
                    <p className="enterprise-business-type">
                      {e.enterprise_type.enterprise_type_name}
                    </p>
                    <p className="enterprise-country">{e.country}</p>
                  </div>
                </ResultCard>
              </Link>
            ))
          ) : (
            <p className="initial-message">{enterpriseNotFoundMessage}</p>
          )}
        </Content>
      ) : (
        <Content>
          <p className="initial-message">Clique na busca para iniciar.</p>
        </Content>
      )}
    </Container>
  );
};

export default Home;
