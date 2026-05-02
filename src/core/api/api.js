import { Auth } from '@/data/auth';
import { urlApi } from '@/core/url/url';
import { GetCountry } from '@/data/country';
import { ListOperators } from '@/data/operator';

const urlAuth = urlApi.urlBase + urlApi.currentUser;
const getCountry = urlApi.urlBase + urlApi.getCountry;
const urlOperators = urlApi.urlBase + urlApi.operators;

// Auth 
export async function auth() {
    try {
        const response = await fetch(urlAuth, {
            method: "GET",
            headers: {
                'application/json': 'Accept',
                'application/json': 'Content-Type'
            }
        })
        console.log("✅ DEBUG: STATUS RESPONSE SUCCESS", response.status);

        switch (response.status) {
            case 200: 
                const authResp = new Auth.toString();
                console.log("✅ DEBUG: JSON RESPONSE SUCCESS", authResp);
                return authResp;
            case 400:
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
            case 401: 
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
            default: 
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
        }
    } catch (error) {
        logger.error("❌ DEBUG: JSON FAILURE RESPONSE", error);
    }
}

// GetCountry 
export async function getCountry() {
    try {
        const response = await fetch(getCountry, {
            method: "GET",
            headers: {
                "application/json": "Accept",
                "application/json": "Content-Type"
            }
        })
        console.log("✅ DEBUG: SERVER RESPONSE SUCCESS", response.status);

        switch (response.status) {
            case 200: 
                const getCountry = new GetCountry.toString();
                console.log("✅ DEBUG: JSON RESPONSE SUCCESS", getCountry);
                return getCountry;
            case 400:
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
            case 401: 
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
            default: 
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
        }
    } catch (error) {
        logger.error("❌ DEBUG: JSON FAILURE RESPONSE", error);
    }
}

// List Operators 
export async function listOperators() {
    try {
        const response = await fetch(urlOperators, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        console.log("✅ DEBUG: STATUS RESPONSE SUCCESS", response.status);

        switch (response.status) {
            case 200:
                const operatorsResp = new ListOperators.toString();
                console.log("✅ DEBUG: JSON RESPONSE SUCCESS", operatorsResp);
                return operatorsResp;
            case 400:
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
            case 401: 
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
            default: 
                console.error("❌ DEBUG: JSON FAILURE RESPONSE", response.status);
        }
    } catch (error) {
        console.error("❌ DEBUG: JSON RESPONSE FAILURE", error);
    }
}

