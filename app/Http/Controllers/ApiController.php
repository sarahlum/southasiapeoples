<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{
    public function fetchData()
    {
        $apiKey = 'aWye9lV20QtF';
        $url = "https://joshuaproject.net/api/v2/people_groups?api_key=aWye9lV20QtF&limit=2000";

        try {
            $response = Http::get($url);

            // Log the entire response including status and body
            Log::info('API Response', [
                'status' => $response->status(),
                'body' => $response->body()
            ]);

            if ($response->successful()) {
                $data = $response->json();

                // Ensure that we log the data structure
                Log::info('Parsed Data', ['data' => $data]);

                // Define the countries and initialize counts
                $countries = ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan'];
                $counts = array_fill_keys($countries, 0);

                // Count the number of people groups for each specified country
                foreach ($data['data'] as $item) {
                    if (isset($item['Ctry']) && in_array($item['Ctry'], $countries)) {
                        $counts[$item['Ctry']]++;
                    }
                }

                return response()->json(['counts' => $counts]);
            } else {
                Log::error('API request failed', [
                    'status' => $response->status(),
                    'body' => $response->body()
                ]);
                return response()->json(['error' => 'Failed to fetch data'], $response->status());
            }
        } catch (\Exception $e) {
            Log::error('API request exception', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }
}
