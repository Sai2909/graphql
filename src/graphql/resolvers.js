const driveInforamations = require('../data/driverInformation');

//go on schema on that 2 querys
const resolvers = {
    Query: {
        driveInforamations: () => driveInforamations,
        driveInforamation: (_, { id }) => driveInforamations.find(item => item.id === id)
    },

    Mutation: {
        createDriver: (_, { first, last, drivercode, primaryEmail, phone, country, isAvailable }) => {
            const newDriverCreating = {
                id: String(driveInforamations.length + 1),
                first,
                last,
                drivercode,
                primaryEmail,
                phone,
                country,
                isAvailable,
            };
            driveInforamations.push(newDriverCreating);
            return newDriverCreating
        },
        deleteDriver: (_, { id }) => {
            const index = driveInforamations.findIndex(driverDelete => driverDelete.id === id);
            if (index === -1) return false
            driveInforamations.splice(index, 1)
            return true
        },

        updateDriver: (_, { id, ...updates }) => {
            const index = driveInforamations.findIndex(driverDelete => driverDelete.id === id);
            if (index === -1) return null;
            const updatedDriver = {
                ...driveInforamations[index], ...updates
            }
            driveInforamations[index] = updatedDriver
            return updatedDriver;
        }

    }
};

module.exports = resolvers;