@extends('log-viewer::app')

@section('title', 'Home Page')

@section('content')
    <data-table 
        :columns="{{ json_encode($columns) }}"
        :table-data="{{ json_encode($tableData) }}"
    ></data-table>
@endsection