<template>
    <div>
        <div class="card">
            <div class="flex justify-between">
                <h4>Student Lists </h4>
                <NuxtLink class="btn" to="/students/create">Add Student</NuxtLink>
            </div>

            <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-red-400">
                    <thead class="text-xs text-gray-700 uppercase bg-red-500 dark:bg-Purple-700 text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created_at
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <div v-if="students == ''">
                            <tr>
                                <th colspan="6">
                                    Loading...
                                </th>
                            </tr>
                        </div>
                        <tr class="bg-white border-b" v-for="(student, index) in students" :key="index">
                            <th scope="row" class="px-6 py-4 font-medium">
                                {{ ++index }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium">
                                {{ student.name }}
                            </th>
                            <td class="px-6 py-4">
                                {{ student.course }}
                            </td>
                            <td class="px-6 py-4">
                                {{ student.email }}
                            </td>
                            <td class="px-6 py-4">
                                {{ student.phone }}
                            </td>
                            <td class="px-6 py-4">
                                {{ student.created_at }}
                            </td>
                            <td class="px-6 py-4">
                                <button class="btn">Edit</button>
                                <button class="btn-error">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            students: {}
        }
    },
    methods: {
        getStudents() {
            axios.get('http://127.0.0.1:8000/api/students').then(res => {
                this.students = res.data.data
            }).catch(e => {
                console.log(e);
            })
        }
    },
    mounted() {
        this.getStudents()
    }
}
</script>

<style lang="scss" scoped></style>