import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { Section, Button } from "../../components";

import { getGroups } from "../../services/firebase/content.controller";

const Course = () => {
  const { id } = useParams();
  const history = useHistory();

  const [groups, setGroups] = useState();
  const [inputs, setInputs] = useState({
    group: "",
    city: "",
    length: "",
    times: "",
    basket: "",
  });
  const [price, setPrice] = useState(10);

  const getData = async () => {
    const res = await getGroups(id);
    setGroups(
      res.docs.map((group) => ({
        id: group.id,
        title: group.data().title,
      }))
    );
  };

  useEffect(() => {
    setPrice(45);

    if (inputs.basket === "be") {
      setPrice(50);
    }
  }, [inputs]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Section>
      <h1 className="title">Mobilios aplikacijos kūrimas</h1>
      <div class="card">
        <div class="card-content">
          <h2 className="title">Užsakyti kursą</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              history.push("/register");
            }}
          >
            <div className="columns is-multiline">
              <div className="column is-half">
                <div className="field">
                  <label className="label">Grupė</label>
                  <div className="control">
                    <div className="select">
                      <select
                        onChange={(e) =>
                          setInputs({ ...inputs, group: e.target.value })
                        }
                      >
                        {groups &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.title}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">City</label>
                  <div className="control">
                    <div className="select">
                      <select
                        onChange={(e) =>
                          setInputs({ ...inputs, city: e.target.value })
                        }
                      >
                        <option value="vilnius">Online</option>
                        <option value="vilnius">Vilnius</option>
                        <option value="kaunas">Kaunas</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">Trukmė</label>
                  <div className="control">
                    <div className="select">
                      <select
                        onChange={(e) =>
                          setInputs({ ...inputs, length: e.target.value })
                        }
                      >
                        <option value="1">1 mėnesis</option>
                        <option value="2">2 mėnesiai</option>
                        <option value="3">3 mėnesiai</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field">
                  <label className="label">Kartai</label>
                  <div className="control">
                    <div className="select">
                      <select
                        onChange={(e) =>
                          setInputs({ ...inputs, times: e.target.value })
                        }
                      >
                        <option value="1">1 kartas</option>
                        <option value="2">2 kartai</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field">
                  <label className="label">NVŠ Krepšelis</label>
                  <div className="control">
                    <div className="select">
                      <select
                        onChange={(e) =>
                          setInputs({ ...inputs, basket: e.target.value })
                        }
                      >
                        <option value="su">Su NVŠ Krepšeliu</option>
                        <option value="be">Be NVŠ Krepšelio</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field">
                  <label className="label">Kaina</label>
                  <div className="control">
                    <div className="content">
                      <h3>&euro;{price}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button color="primary" type="submit">
              Užsakyti
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Course;
