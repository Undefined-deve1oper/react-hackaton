import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../../store/slices/auth";
import { getFavourites } from "../../../store/slices/favourites";
import DeveloperList from "../../common/DeveloperList";
import FavouritesList from "../../ui/Favourites/FavouriteList";

const FavouritesPage = () => {
    const navigate = useNavigate();
    const favourites = useSelector(getFavourites());
    const isLoggedin = useSelector(getIsLoggedIn());

    const goBack = () => {
        navigate(-1);
    };

    if (favourites) {
        return (
            <div>
                <button
                    onClick={goBack}
                    style={{
                        color: "#eee",
                        margin: "10px 10px",
                        backgroundColor: "gray",
                        padding: "5px 10px",
                        borderRadius: "10px"
                    }}
                >
                    go back
                </button>
                {!isLoggedin && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            height: "70vh",
                            alignItems: "center"
                        }}
                    >
                        <h1>
                            Избранное доступно для авторизованных пользователей
                        </h1>
                    </div>
                )}
                {isLoggedin && favourites.length ? (
                    <div
                        className="team-list-block"
                        style={{ fontSize: "26px" }}
                    >
                        <h1
                            style={{
                                margin: "20px auto",
                                textAlign: "center",
                                padding: "10px",
                                backgroundColor: "#8e63d2",
                                color: "#fff",
                                width: "40%",
                                borderRadius: "12px"
                            }}
                        >
                            избранное:
                        </h1>
                        <FavouritesList favourites={favourites} />
                    </div>
                ) : isLoggedin ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "60vh"
                        }}
                    >
                        <h1>ничего не добавлено в избранное</h1>
                    </div>
                ) : null}
            </div>
        );
    }
};

export default FavouritesPage;
