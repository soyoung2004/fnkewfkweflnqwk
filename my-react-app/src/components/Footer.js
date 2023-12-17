
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaPlus, FaList } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className="footer">
            <Link to="/friends">
                    <FaUsers />
                          </Link>
                                <Link to="/create-room">
                                        <FaPlus />
                                              </Link>
                                                    <Link to="/room-list">
                                                            <FaList />
                                                                  </Link>
                                                                      </div>
                                                                        );
                                                                        };

                                                                        export default Footer;
